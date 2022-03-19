
const Circle = ({ displayCount, active, Submit, progressStep }) => {
    return (
        <div className={active ? 'active-circle' : 'circle'} onClick={() => {
            if (progressStep) {
                if (progressStep + 1 < displayCount) {
                    return
                }
                Submit()
            }
        }}>
            {displayCount}
        </div>
    )
}

export default Circle
