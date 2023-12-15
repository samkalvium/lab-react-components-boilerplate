export function Body (props) {
    let imageData = props.image;
    return (
        
        <div>
            {
                imageData.map(image => {
                    return (
                        <div key={image.id} className="column">
                            <img src={image.img} alt=""></img>
                        </div>
                    )
                })
            }
        </div>
    )
}