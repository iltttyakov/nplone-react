import React from 'react'
import cls from './Present.module.scss'
import Container from "../../wrappers/Container/Container";

export default {
    Section: ({children, type = 'blue', className = '', id = ''}) => {
        const clsArr = [cls.section, className]
        switch (type) {
            case 'blue':
                clsArr.push(cls.blue)
                break
            case 'green':
                clsArr.push(cls.green)
                break
            case 'grey':
                clsArr.push(cls.grey)
                break
        }

        return <section className={clsArr.join(' ')} id={id}>{children}</section>
    },
    Content: ({children, className = ''}) => <Container className={[cls.content, className].join(' ')}>
        {children}
    </Container>,
    Overflow: ({children}) => <div className={cls.overflow}>{children}</div>,
    PictureContainer: ({children, className = ''}) => <div className={[cls.pictureContainer, className].join(' ')}>
        {children}
    </div>,
    Picture: ({src, alt = '', width = '', height}) => <img
        className={cls.picture}
        src={src}
        alt={alt}
        width={width}
        height={height}
    />,
    TextContainer: ({children, size = 'small', position = 'left', className = ''}) => {
        const clsArr = [cls.textContainer, className]
        switch (size) {
            case 'small':
                clsArr.push(cls.small)
                break
            case 'big':
                clsArr.push(cls.big)
                break
        }
        switch (position) {
            case 'right':
                clsArr.push(cls.right)
                break
        }
        return <div className={clsArr.join(' ')}>
            {children}
        </div>
    }
}