$("#submitExercise").click(evt => {
    evt.preventDefault()

    const concept = $("#concept")
    const language = $("#language")
    const instructions = $("#instructions")

    $.ajax({
        method: "POST",
        url: `http://localhost:8088/exercises`,
        data: {
            concept: concept.val(),
            language: language.val(),
            instructions: instructions.val()
        }
    }).then(res => {
        concept.val("")
        language.val("")
        instructions.val("")
    })
});