import React, { Suspense } from 'react'
import StreamComponentA from './_components/StreamComponentA'
import StreamComponnentB from './_components/StreamComponnentB'

export async function wait(ms) { 
    return new Promise((r) => setTimeout(r, ms));
 }
const StreamPages = () => {
  return (
  <main>
            <h1 className="font-bold text-center text-[40px]">Streaming Page</h1>
            <section className="flex wt-10 justify-center items-center gap-5">
                {/* _StreamComponentA */}
                <Suspense fallback="LoadingA.....">
                    <StreamComponentA/>
                </Suspense>
                {/* _StreamComponentB */}
                <Suspense fallback="LoadingB........" >
                    <StreamComponnentB/>
                </Suspense>
            </section>
  </main>
  )
}

export default StreamPages