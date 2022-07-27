
import { useTranslation } from 'react-i18next';

function Description(props) {
    const { t } = useTranslation();
    return (
        <>
            <div className="story-description">
                <h5>{t('detail.summary')}</h5>
                <span>
                    {props.content}
                </span>
            </div>
        </>
    );
}

export default Description;