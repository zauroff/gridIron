
function ScoreCard(props) {
    return(
        <div class="hover:drop-shadow-xl hover: p-10 m-10 flex shadow-md  rounded-xl bg-neutral-800 ">
            
            <div class="block justify-center m-4 p-3">
                <img src={props.teamLogo_0} class="object-scale-down h-40 w-96 scale-50"></img>
                <p class="text-center font-bold text-lg">{props.teamName_0}</p>
                <p class="text-center font-black text-5xl p-4">{props.teamScore_0}</p>
            </div>
            
            <div class="py-10 my-10 inline">
                <p class="text-lg text-center font-bold">{props.gameTime}</p>
                <p class="text-center">{props.Date}</p>
            </div>
            
            
            <div>
                <img src={props.teamLogo_1} class="object-scale-down h-40 w-96 scale-50"></img>
                <p class="text-center font-bold text-lg">{props.teamName_1}</p>
                <p class="text-center font-black text-5xl p-4">{props.teamScore_1}</p>
            </div>
            

        </div>
    )
}

export default ScoreCard