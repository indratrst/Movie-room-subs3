const main = () => {
	$(".search-btn").on("click", () => {
		$(".loader").toggleClass("visually-hidden");
		$.ajax({
			url: "http://www.omdbapi.com/?apikey=2bde9316&s=" + $(".input-keyword").val(),
			success: (results) => {
				const movies = results.Search;
				let cards = "";
				if (!$(".input-keyword").val()) {
					$(".loader").toggleClass("visually-hidden");
					$(".movie-container").html(/*html*/ `<div class="alert alert-warning d-flex align-items-center" role="alert">
						Oops anda belum memasukan judul film
				</div>`);
				} else {
					movies.forEach((m) => {
						cards += cardMovies(m);
					});
					$(".loader").toggleClass("visually-hidden");
					$(".movie-container").html(cards);
				}

				$(".modal-img").on("click", function () {
					$(".loader").toggleClass("visually-hidden");
					$.ajax({
						url: "http://www.omdbapi.com/?apikey=2bde9316&i=" + $(this).data("imdbid") + "&plot=full",
						success: (m) => {
							$(".loader").toggleClass("visually-hidden");
							const movie = movieModal(m);
							const modalHead = modalHeader(m);
							const modalFoot = modalFooter(m);
							$(".modal-body").html(movie);
							$(".modal-header").html(modalHead);
							$(".modal-footer").html(modalFoot);
						},
						error: (e) => {
							$(".loader").toggleClass("visually-hidden");
							alert((e.responseText = "Error"));
							console.log(e.responseText);
						},
					});
				});
			},
			error: (e) => {
				$(".loader").toggleClass("visually-hidden");
				alert((e.responseText = "Error"));
				console.log(e.responseText);
			},
		});
	});

	const cardMovies = (m) => {
		if (m.Poster != "N/A") {
			m.Poster;
		} else {
			m.Poster = "assets/image_not_found.png";
		}
		return /*html*/ `
  <div class="col-md-3 my-3">
  <div class="card">
	<img src="${m.Poster}" class="card-img-top modal-img" data-bs-toggle="modal" data-bs-target="#movieModal" data-imdbid=${m.imdbID} />
    <div class="card-body shadow-sm">
      <h5 class="card-title">${m.Title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
    </div>
  </div>
</div>

`;
	};

	const movieModal = (m) => {
		if (m.Poster != "N/A") {
			m.Poster;
		} else {
			m.Poster = "assets/image_not_found.png";
		}
		return /*html*/ `<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${m.Poster}" class="img-fluid" alt="" />
    </div>
    <div class="col-md">
      <ul class="list-group">
        <li class="list-group-item">Director : </strong> ${m.Director}</li>
        <li class="list-group-item">Actors : </strong> ${m.Actors}</li>
        <li class="list-group-item">Writer : </strong> ${m.Writer}</li>
        <li class="list-group-item">Runtime : </strong> ${m.Runtime}</li>
        <li class="list-group-item">Genre : </strong> ${m.Genre}</li>
        <li class="list-group-item">Awards : </strong> ${m.Awards}</li>
        <li class="list-group-item">Country : </strong> ${m.Country}</li>
      </ul>
    </div>
  </div>
</div>

`;
	};

	const modalHeader = (m) => {
		if (m.imdbRating >= 8.5) {
			m.imdbRating = "⭐⭐⭐⭐⭐" + `(${m.imdbRating})`;
		} else if (m.imdbRating >= 7.5 && m.imdbRating <= 8.5) {
			m.imdbRating = "⭐⭐⭐⭐" + `(${m.imdbRating})`;
		} else if (m.imdbRating >= 5.5 && m.imdbRating <= 7.5) {
			m.imdbRating = "⭐⭐⭐" + `(${m.imdbRating})`;
		} else if (m.imdbRating >= 3.5 && m.imdbRating <= 5.5) {
			m.imdbRating = "⭐⭐" + `(${m.imdbRating})`;
		} else if (m.imdbRating >= 1 && m.imdbRating <= 3.5) {
			m.imdbRating = "⭐" + `(${m.imdbRating})`;
		} else {
			m.imdbRating = "N/A";
		}

		return /*html*/ `
	<h5 class="modal-title text-wrap" id="movieModal"><strong>${m.Title}</strong> (${m.Released})</h5>
	<h5 class="modal-title rating" id="movieModal">Rating:${m.imdbRating}</h5>
	`;
	};

	const modalFooter = (m) => {
		return /*html*/ `<p><strong>Plot : </strong><br />${m.Plot}</p>
	<button type="button " class="btn btn-danger" data-bs-dismiss="modal">Close</button>`;
	};
};

export default main;
