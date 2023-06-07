import styles from './Tags.module.css';


export const Tags = ({children}) => {

  const renderTags = () => {
    return children.map(child => <div key={`tag${child}`} className={styles.tag}>{child}</div>)
  }


  return <div className={styles.container}>
    {renderTags()}
  </div>
};

Tags.defaultProps={
  children:[]
}