import { useNavigation } from "react-router-dom";

type Props = {
    text: string;
}

export const SubmitBtn = ({ text }: Props) => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting';

    return (
        <button className="btn btn-primary w-full" disabled={isSubmitting}>
            {
                isSubmitting ?
                    <>
                        <span className="loading loading-spinner"></span>
                        sending...
                    </>
                    : text || 'submit'
            }
        </button>
    )
}
