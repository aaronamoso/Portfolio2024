import styles from './FooterStyles.module.css'
function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
}
function Footer() {
    return (
        <section id="footer" className={styles.container}>
            <p>&copy; {getDate()} Aaron Amoso <br />
                All rights reserved.</p>
        </section>
    )
}

export default Footer