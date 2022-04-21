import React from 'react';
import OutputComponent from 'editorjs-react-renderer'

const style = {
    header: {
        fontFamily: 'Nunito',
        marginBottom: '10px'
    },
    paragraph: {
        fontSize: '18px',
        fontFamily: 'Nunito',
        lineHeight: '1.6em'
    },
    list: {
        container: {
            margin: '20px 0'
        },
        listItem: {
            fontSize: '18px',
            fontFamily: 'Nunito',
            lineHeight: '2em'
        }
    },
    delimiter: {
        container: {
            fontFamily: 'Rubik'
        },
        svg: {},
        path: {}
    }
}

type DataProps = {
    data: Object
}

const OutputEditorData: React.FC<DataProps> = ({data}) => {
    if (!data) {
        return null
    }

    return (
        <>
            {Object.keys(data).length > 0 && (
                <OutputComponent style={style} data={JSON.parse(data)}/>
            )}
        </>
    );
};


export default OutputEditorData;