const concept = $("#concept")
const language = $("#language")
const instructions_basic = $("#instructions-basic")
const instructions_stretch = $("#instructions-stretch")

$("#randomize").click(evt => {
    $.ajax({
        method: "GET",
        url: `http://localhost:8088/exercises`
    }).then(res => {
        const languageChoice = $("#language-random")
        const filteredExercises = res.filter(e => e.language === languageChoice.val())
        const randomExercise = filteredExercises[Math.floor(Math.random() * res.length)]

        concept.val(randomExercise.concept)
        language.val(randomExercise.language)
        instructions_basic.val(randomExercise.instructions_basic)
        instructions_stretch.val(randomExercise.instructions_stretch)
    })
})

$("#submitExercise").click(evt => {
    evt.preventDefault()

    $.ajax({
        method: "POST",
        url: `http://localhost:8088/exercises`,
        data: {
            concept: concept.val(),
            language: language.val(),
            instructions_basic: instructions_basic.val(),
            instructions_stretch: instructions_stretch.val()
        }
    }).then(res => {
        concept.val("")
        language.val("")
        instructions_basic.val("")
        instructions_stretch.val("")
    })
});