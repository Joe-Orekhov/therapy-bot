Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey.StylesManager.applyTheme("bootstrapmaterial");

        const json = { pages: [
        {questions: [
            { type: "matrix", name: "Quality", title: "Please indicate if you agree or disagree with the following statements",
                columns: [{ value: 1, text: "Strongly Disagree" }, 
                          { value: 2, text: "Disagree" }, 
                          { value: 3, text: "Neutral" }, 
                          { value: 4, text: "Agree" }, 
                          { value: 5, text: "Strongly Agree" }],
                rows: [{ value: "clean", text: "Is your room currently clean?" }, 
                       { value: "bed", text: "How important is it that you make your bed everyday?" },
                       { value: "anxious", text: "Are you feeling nervous, anxious or on edge?" }, 
                       { value: "depressed", text: "Feeling down, depressed or hopeless recently?"  }]},


            
            ]}
    ]
};
const survey = new Survey.Model(json);

        

        

        return (
            <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyComponent;