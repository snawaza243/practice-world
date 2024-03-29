import TopBar from '../../components/topbar/TopBar';
import './write.css'
function Write() {

    return (
        <>
        {/* <TopBar /> */}
            <div className="write">
                <img className='writeImg' src="https://www.blogtyrant.com/wp-content/uploads/2019/07/draft-a-post.jpg" alt="" />
                <form className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeIcon fas fa-plus"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                        <input type="text" placeholder="Title"
                            className="writeInput" autoFocus={true} />
                    </div>
                    <div className="writeFormGroup">
                        <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                    </div>

                    <button className="writeSubmit">Publish</button>
                </form>
            </div>
        </>
    )
}

export default Write;