

function ScoreCard(props) {
    return (
        <div class="flex flex-row max-w-3xl justify-center items-center hover:drop-shadow-lg  p-6 m-10 shadow-md rounded-xl bg-neutral-800">
            
            <div class="flex flex-col justify-center items-center m-4 p-3">
                <a href={props.teamStats_0}  target="_blank">
                    <img src={props.teamLogo_0} class="object-scale-down h-40 w-96"></img>
                </a>
                
                <p class="text-center font-bold text-lg pt-3">{props.teamName_0}</p>
                <p class="text-center font-black text-5xl p-4">{props.teamScore_0}</p>
            </div>
            
            <div class="flex flex-col justify-center items-center py-10 my-10">
                <p class="text-lg text-center font-bold">{props.gameTime}</p>
                <p class="text-center">{props.Date}</p>
            </div>
            
            <div class="flex flex-col justify-center items-center m-4 p-3">
                <a href={props.teamStats_1}  target="_blank">
                    <img src={props.teamLogo_1} class="object-scale-down h-40 w-96"></img>
                </a>
                <p class="text-center font-bold text-lg pt-3">{props.teamName_1}</p>
                <p class="text-center font-black text-5xl p-4">{props.teamScore_1}</p>
            </div>
            
        </div>
    )
}


export default ScoreCard