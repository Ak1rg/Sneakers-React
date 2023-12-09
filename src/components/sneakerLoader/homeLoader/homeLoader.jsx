import ContentLoader from "react-content-loader"

const HomeLoader = (props) => (
    <ContentLoader 
        speed={2}
        width={150}
        height={187}
        viewBox="0 0 150 187"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="6" ry="6" width="150" height="91" /> 
        <rect x="0" y="100" rx="6" ry="6" width="150" height="20" /> 
        <rect x="0" y="125" rx="6" ry="6" width="100" height="20" /> 
        <rect x="0" y="160" rx="6" ry="6" width="80" height="25" /> 
        <rect x="110" y="150" rx="6" ry="6" width="35" height="35" />
    </ContentLoader>
)

export default HomeLoader