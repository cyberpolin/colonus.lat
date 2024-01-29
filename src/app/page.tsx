import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center content-center min-h-screen flex-col items-center justify-between p-24">
      <div className="relative m-auto flex place-items-center before:absolute before:h-[500px] before:w-[780px] before:-translate-x-2/4 before:rounded-full before:bg-gradient-radial before:from-yellow before:to-yellow-500 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3  after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image src="/next.svg" alt="Colonus.lat" width="290" height="97" />
      </div>
      <div className="flex justify-center w-full">
        <a href="https://apps.apple.com/mx/app/colonus/id6455226135?l=en-GB">
          <Image
            src="/applestore.svg"
            alt="Colonus.lat"
            width="210"
            height="97"
            className="mr-8"
          />
        </a>
        <a href="/app-release.apk">
          <Image
            src="/android.svg"
            alt="Colonus.lat"
            width="210"
            height="97"
            className="ml-8"
          />
        </a>
      </div>
    </main>
  )
}
