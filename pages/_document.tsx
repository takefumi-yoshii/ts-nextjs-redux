import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import DefaultLayout from '../layouts/index'

const document = () => {
    return <DefaultLayout/>
}

document.getInitialProps = async (ctx: DocumentContext) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />)
        })

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [...(initialProps.styles as any), ...sheet.getStyleElement()]
    };
}

export default document
