

function Description(props) {
    return (
        <>
            <div className="story-description">
                <h5>Summary</h5>
                <span>
                    {props.content}
                </span>
            </div>
        </>
    );
}

export default Description;