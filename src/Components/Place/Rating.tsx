import React from 'react'
import Rating from '@mui/material/Rating';
import {withStyles} from '@mui/styles'
import {theme} from "../../../styles/theme";

type RatingTypes = {
    place: Object,
    disable: boolean,
    size: string
}

const StyledRating = withStyles({
    iconFilled: {
        color: theme.color.orange
    },
    iconHover: {
        color: theme.color.orange
    }
})(Rating)

const RatingBlock: React.FC<RatingTypes> = ({place, disable = true, size = 'small'}) => {
    const [rating, setRating] = React.useState(0)
    React.useEffect(() => {
        if (place?.comments?.length > 0) {
            const sum = place.comments.reduce((acc, item) => {
                return acc + item.rate
            }, 0)
            setRating(sum / place.comments.length)
        }
    }, [])

    return (
        <StyledRating
            name="common-rate"
            value={rating || 0}
            precision={0.5}
            readOnly={disable}
            size={size}
        />
    )
}

export default RatingBlock
