import { deleteMember } from '../../apiMember';
import styles from './member.module.css';

const Member = ({member, onActivated, onDelete}) => {
  const date = new Date();
  const dateStr = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate();
  var memberStatus = member.expiryDate > dateStr ? 'active' : 'inactive';

  const buttonHandler = () => {
    onActivated(member.id);
  }

  const handleDelete = () => {
    if (window.confirm('Do you really want to delete this member?')) {
      deleteMember(member.id).then(onDelete);
    }
  };

  return (
    <tr className={styles.member}>
      {
        <>
          <td className={styles.name}>
            {member.name}
          </td>
          <td className={styles.status}>
            {memberStatus}
          </td>
          <td>
            <button className={styles.activate} disabled={memberStatus === 'active'} onClick={buttonHandler}>
              Activate
            </button>
          </td>
          <td>
            <button className={styles.delete} onClick={handleDelete}>
              Delete
            </button>
          </td>
        </>
      }
    </tr>
  );
};

export default Member;