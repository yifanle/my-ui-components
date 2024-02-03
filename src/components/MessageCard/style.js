import Badge from 'components/Badge';
import Paragraph from 'components/Paragraph';
import Text from 'components/Text';
import styled from 'styled-components'

const Name = styled(Text).attrs({ size: "large"})``;

const Time = styled(Text).attrs({size: "medium", type: "secondary"})``;

const Status = styled(Text).attrs({type: "secondary"})``;

const Message = styled.div``;

const MessageText = styled(Paragraph).attrs({ellipsis: true})``;

const UnreadBadge = styled(Badge)``;

const StyledMessageCard = styled.div``;

export default StyledMessageCard;
export {Name, Time, Status, Message, MessageText, UnreadBadge};