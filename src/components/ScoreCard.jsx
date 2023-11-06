
function ScoreCard(props) {
    return(
        <div class="hover:drop-shadow-xl hover: p-10 m-10 inline-table shadow-md rounded-xl bg-neutral-800">
            <p>Game Time: {props.gameTime}</p>
            <p>Date : {props.Date}</p>

            <p>Team One : {props.teamName_0}</p>
            <p>Team One Score : {props.teamScore_0}</p>

            <p>Team Two : {props.teamName_1}</p>
            <p>Team Two Score : {props.teamScore_1}</p>
            

        </div>
    )
}

export default ScoreCard