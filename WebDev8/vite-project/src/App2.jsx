import Header from "./header.jsx"
// import Footer from "./footer.jsx"

function App2() {
    return (
        <>
            <Header name="Kirtan" age={20} />
            <main>
                <p>Time is {new Date().toLocaleTimeString()}</p>
            </main>
            {/* <footer /> */}
        </>
    )
}

export default App2