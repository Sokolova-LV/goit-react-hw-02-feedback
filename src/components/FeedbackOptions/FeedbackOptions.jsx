import PropTypes from 'prop-types';
import { List, Item, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <List>
        {options.map(option => (
            <Item>
                <Btn name={option} onClick={onLeaveFeedback}>
                    {option}
                </Btn>
            </Item>
        ))}
    </List>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}