import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from 'rn-placeholder'

export default function HomePlaceholder() {
    return (
        <Placeholder Animation={Fade} Left={PlaceholderMedia} Right={PlaceholderMedia}>
            <PlaceholderLine width={80} />
            <PlaceholderLine />
            <PlaceholderLine width={30} />
        </Placeholder>
    )
}
