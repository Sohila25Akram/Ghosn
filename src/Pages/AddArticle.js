import { useEffect, useState } from 'react'
import '../styles/addArticle.css'
import axios from 'axios'

export function AddArticle(){

    const [cover, setCover] = useState(null)
    const [coverReview, setCoverReview] = useState(null)
    const [articleTitle, setArticleTitle] = useState('')
    const [articleSubtitle, setArticleSubtitle] = useState('')
    const [articleSlug, setArticleSlug] = useState('')
    const [articleTags, setArticleTags] = useState([])
    //Title: ["The field Title must be a string or array type with a minimum length of '10'."]
    //Slug: ["The field Slug must be a string or array type with a minimum length of '10'.", and not allowed to repeat it]
    //Title: ["The field Title must be a string or array type with a minimum length of '10'."]
    const [articleWriter, setArticleWriter] = useState({
        firstName: '',
        lastName: ''
    })
    const [sectionNum, setSectionNum] = useState(1)
    // const [sectionTitle, setSectionTitle] = useState('')
    // const [sectionContent, setSectionContent] = useState('')
    const [sections, setSections] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [articleId, setArticleId] = useState(0);
    const [openSmallWindow, setOpenSmallWindow] = useState(false);
    const [sectionContent, setSectionContent] = useState('');
    // const [ addArticle, setAddArticle] = useState({
    //     title: '',
    //     slug: '',
    //     tags:[],
    //     firstName: '',
    //     lastName: ''
    // })

    // const handleClick = () => {
    //     setIsOpen(true);
    // }
    
    const api = 'https://ghosn.runasp.net'
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

    const onAddArticleClick = async () => {
        try{
            const response = await axios.post(`${api}/api/Article`, {
                title : articleTitle,
                slug : articleSlug,
                tags : articleTags
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log('Article added:', response.data);
            setArticleId(response.data.id);
            // if(cover){
            //     await onAddCover(cover);
            // }
            // if (articleId) {
            //     await onAddArticleSectionClick(articleId); // Pass the new article id
            // }
            // if (cover) { // Check if a cover image is selected
            //     await onAddCover(cover); // Pass the new article id and cover state
            // }
        }catch (error){
            console.error('Error adding article:', error);
        }
    }

    const onAddArticleSectionClick = async (secNum) => {
        try{
            const section = sections[secNum - 1]
            const response = await axios.post(`${api}/api/Article/${articleSlug}/append`, {
                articleId: articleId,
                sequence: secNum,
                sectionHeading: section.title,
                contentText: section.content
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log('Section added:', response.data)
            if (section.photo) {
                await onAddSectionImg(secNum, section.photo);
            }
        }catch(error){
            console.error('Error adding section:', error)
        }
    }

    const onAddSectionImg = async (secNum, file) => {
        try{
            // const section = sections[secNum - 1]
            const formData = new FormData();
            formData.append('ArticleId', articleId);
            formData.append('SectionId', secNum);
            formData.append('ImageFile', file);
            const response = await axios.patch(`${api}/api/Article/section/img`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log('Section image uploaded:', response.data);
        }catch(error){
            console.error("failed to upload section img", error)
        }
    }
    const onAddCover = async (file) => {
        try{
            const formData = new FormData();
            formData.append('ArticleId', articleId);
            formData.append('ImageFile', file);


            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }
            const response = await axios.patch(`${api}/api/Article/img`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log("cover added", response.data);
        }catch(error){
            console.error('failed upload to Cover of Article', error)
        }
    }


    const handleCoverChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCover(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverReview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSectionImageChange = (index, file) => {
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const updatedSections = [...sections];
                updatedSections[index] = { ...updatedSections[index], photo: reader.result };
                setSections(updatedSections);
            };
            reader.readAsDataURL(file)
        }
    }

    const addSection = () => {
        setSectionNum(prevNum => prevNum + 1);
        setSections(prevSections => [...prevSections, { title: '', content: '', photo: '' }]) // Initialize new section with empty values
    };

    const handleSectionTitleChange = (index, value) => {
        const updatedSections = [...sections];
        updatedSections[index] = { ...updatedSections[index], title: value };
        setSections(updatedSections)
    }

    const handleSectionContentChange = (index, value) => {
        const updatedSections = [...sections];
        updatedSections[index] =  { ...updatedSections[index], content: value };
        setSections(updatedSections)
        setSectionContent(value)
    }

    // const handleWriterChange = (field, value) => {
    //     setArticleWriter(prevWriter => ({
    //         ...prevWriter,
    //         [field]: value
    //     }))
    // }

    // const handleSectionImageChange = (index, value) => {
    //     const updatedSections= [...sections];
    //     updatedSections[index] = { ...updatedSections[index], photo: value };
    //     setSections(updatedSections)
    // }

    // const handleArticleChange = (field, value) => {
    //     setAddArticle(prevArticle => ({
    //         ...prevArticle,
    //         [field]: value
    //     }));
    // };

    const handleWriterChange = (field, value) => {
        setArticleWriter(prevWriter => ({
            ...prevWriter,
            [field]: value
        }));
    };

    const handleArticleTitleChange = (e) => {
        setArticleTitle(e.target.value);
    };

    const handleSlugWindow = () => {
        setOpenSmallWindow('slug')
        // {openSmallWindow && 
        //     <AddArticleSmallWindow 
        //         handleChange={handleArticleSlugChange}
        //         idParam='article-slug'
        //         labelParam='Add Slug'
        //         setOpenSmallWindow={setOpenSmallWindow}
        //     />
        // }
    }
    const handleArticleSlugChange = (e) => {
        setArticleSlug(e.target.value);
    };

    const handleTagWindow = () => {
        setOpenSmallWindow('tag')
        // {openSmallWindow && 
        //     <AddArticleSmallWindow 
        //         handleChange={handleArticleTagsChange}
        //         idParam='article-tag'
        //         labelParam='Add Tag'
        //         setOpenSmallWindow={setOpenSmallWindow}
        //         articleTags={articleTags}
        //     />
        // }
    }
    const handleArticleTagsChange = (e) => {
        // const tags = e.target.value.split('#').map(tag => tag.trim());
        //separate each tag whith comma and no spaces
        const tags = e.target.value.split(/(?<=\S) /).map(tag => tag.trim()).filter(tag => tag.startsWith('#')).map(tag => tag.substring(1));
        setArticleTags(tags);
    };

    useEffect(() => {
        if(articleId){
            sections.forEach((_, index) => {
                onAddArticleSectionClick(index + 1);
            });
            if(cover){
                onAddCover(cover);
            }
        }
    }, [articleId, cover, sections]);
    
    return(
        <div className='container'>
            <form className='add-article-form' onSubmit={e => e.preventDefault()}>
                <div className='add-article-form-content'>
                <div className='article-cover'>
                    {coverReview ?
                        <img src={coverReview} alt='article-cover' /> :
                        <img src='https://placehold.co/1000.png' style={{height: '100%'}} />
                    }
                    <input type='file' id='article-cover' onChange={handleCoverChange} />
                </div>
                <div className='article-content'>
                    {/* <label htmlFor='article-name' className='article-title'>عنوان المقال:</label> */}
                    <input type='text' id='article-name' placeholder='عنوان المقال' onChange={handleArticleTitleChange} />
                    {/* <label htmlFor='article-subtitle'>لمحة عن المقال:</label>
                    <input type='text' id='article-subtitle' onChange={(e) => setArticleSubtitle(e.target.value)} /> */}
                    {/* <label htmlFor='article-slug'>Slug:</label> */}
                    {/* <input type='text' id='article-slug' onChange={handleArticleSlugChange} /> */}
                    {/* <label htmlFor='article-tags'>Tags:</label> */}
                    {/* <input type='text' id='article-tags' onChange={handleArticleTagsChange} /> */}
                    {/* <div className='tags-container'>
                        {articleTags.map((tag, index) => (
                        tag.length > 1 && <span className='tag-span' key={index}>{tag}</span>
                        ))}
                    </div> */}
                    {/* <button type='submit' className='save-plant-btn main-button green-button' onClick={onAddArticleClick}>Save</button>
                    <button type='button'className='preview-btn' onClick={() => setIsOpen(true)}>Preview</button>
                    </form> */}
                    {/* {cover && <button onClick={() => onAddCover(cover)}>add cover</button>} */}
                
                    {/* <form className='add-article-form2' onSubmit={e => e.preventDefault()}> */}
                        {/* <label htmlFor='article-writer'>كاتب المقال:</label>
                        <input type='text' id='article-writer' placeholder='الاسم الاول' onChange={(e) => handleWriterChange('firstName', e.target.value)} />
                        <input type='text' id='article-writer' placeholder='الاسم الاخير' onChange={(e) => handleWriterChange('lastName', e.target.value)} /> */}
                        {/* <label htmlFor='article-cover'>غلاف المقال:</label><br /> */}
                        {/* <label id='article-content' style={{display:"block", marginTop:"32px"}}>المحتوى:</label><br /> */}
                        {[...Array(sectionNum)].map((_, i) => (
                            <AddArticleSection 
                            key={i} 
                            secNum={i + 1} 
                            setSectionTitle={(value) => handleSectionTitleChange(i, value)} 
                            setSectionContent={(value) => handleSectionContentChange(i, value)} 
                            setSectionPhoto={(value) => handleSectionImageChange(i, value)}
                            handleSectionImageChange={(file) => handleSectionImageChange(i, file)}
                            onAddArticleSectionClick={() => onAddArticleSectionClick(i + 1)}
                        />
                        ))}
                        {/* <button type='button' className='add-section-btn main-button' onClick={addSection}><i className="ri-add-line"></i> Add one more section</button> */}
                        {/* <details>
                            <summary>section 1</summary>
                            <p>out content</p>
                        </details> */}
                        {/* <button type='button'className='preview-btn main-button green-button' onClick={() => setIsOpen(true)} style={{ width:"fit-content", padding: "12px 32px", borderRadius:"26px"}}>Preview</button> */}
                    {/* </form> */}
                </div>
                <div className='add-article-bottom'>
                    <button onClick={addSection}><i className="ri-add-line"></i> Add Section</button>
                    <button onClick={handleSlugWindow}><i className="ri-edit-2-line"></i> Add Slug</button>
                    <button onClick={handleTagWindow}><i className="ri-price-tag-3-line"></i> Add Tags</button>
                </div>
                {/* <button type='submit' className='save-plant-btn main-button green-button' onClick={onAddArticleClick}>Save</button> */}
                {openSmallWindow === 'slug' && 
                    <AddArticleSmallWindow 
                        handleChange={handleArticleSlugChange}
                        idParam="article-slug"
                        labelParam="Add Slug"
                        setOpenSmallWindow={setOpenSmallWindow}
                    />
                }
                    {openSmallWindow === 'tag' && 
                    <AddArticleSmallWindow 
                        handleChange={handleArticleTagsChange}
                        idParam="article-tag"
                        labelParam="Add Tag"
                        setOpenSmallWindow={setOpenSmallWindow}
                        articleTags={articleTags}
                    />
                }
            </div>
            <button type='submit' className='save-plant-btn main-button green-button' onClick={() => {sectionContent && onAddArticleClick()}}>Save</button>

            </form>
                    
         
        </div>
    )
}

const AddArticleSection = ({secNum, setSectionTitle, setSectionContent, handleSectionImageChange, onAddArticleSectionClick}) => {
    return(
        <div className='article-section-form-content'>
            {/* <div className='section-num'>{secNum}</div>
            <div className='article-section-form-content'>
                <textarea id='article-content' placeholder='عنوان السكشن' onChange={(e) => setSectionTitle(e.target.value)}></textarea>
                <textarea id='article-content' placeholder='محتوى السكشن' onChange={(e) => setSectionContent(e.target.value)}></textarea><br />
                <input type='file' onChange={(e) => handleSectionImageChange(e.target.files[0])}/>
            </div> */}
            {/* <summary>Section: {secNum} <i className="ri-arrow-down-s-line"></i></summary> */}
            {/* <textarea id='article-content' placeholder='عنوان السكشن' onChange={(e) => setSectionTitle(e.target.value)}></textarea> */}
            {/* <label>Section Header</label> */}
            <input id='article-content' placeholder='عنوان السكشن' onChange={(e) => setSectionTitle(e.target.value)} />
            {/* <label>Section Content</label> */}
            <textarea id='article-content' placeholder='محتوى السكشن' onChange={(e) => setSectionContent(e.target.value)}></textarea><br />
            {/* <input type='file' onChange={(e) => handleSectionImageChange(e.target.files[0])}/> */}
            {/* <button type='submit' className='save-plant-btn main-button green-button' onClick={() => {onAddArticleSectionClick(secNum)}}>Save</button> */}
        </div>
        
    )
}

const AddArticleSmallWindow = ({handleChange, idParam, labelParam, setOpenSmallWindow, articleTags= null}) => {
    // const handleCloseClick = (e) => {
    //     e.preventDefault(); // Prevents default form behavior (if inside a form)
    //     setOpenSmallWindow(false); // Properly updates the state
    // };

    return(
        <div className='add-article-small-window-parent'>
            <div className='add-article-small-window'>
                <label htmlFor={idParam}>{labelParam}:</label>
                <input type='text' id={idParam} onChange={handleChange} />
                {idParam === 'article-tag' &&
                    <div className='tags-container'>
                        {articleTags.map((tag, index) => (
                            tag.length > 1 && <span className='tag-span' key={index}>{tag}</span>
                        ))}
                    </div>
                }
                <div className='small-window-buttons-container'>
                    {/* <button type='submit' className='main-button green-button'>Save</button> */}
                </div>
                <button className='close-btn' onClick={() => setOpenSmallWindow(false)}><i className="ri-close-line"></i></button>
            </div>
        </div>
    )
}


