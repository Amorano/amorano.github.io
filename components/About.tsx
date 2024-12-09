'use client';
import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="pt-16 pb-8 px-2">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Content */}
        <h1 className="text-4xl font-bold mb-4">
          Hello, I&apos;m <span className="text-blue-400">Alexander</span>!
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          Technical Director, Software Developer & Creative Technologist
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mb-4">
          <a href="https://github.com/Amorano"
             target="_blank"
             rel="noopener noreferrer"
             className="p-2 hover:text-blue-400 transition">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href="https://www.imdb.com/name/nm2157801"
              className="p-2 hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M22.3781 0H1.6218C.7411.0583.0587.7437.0018 1.5953l-.001 20.783c.0585.8761.7125 1.543 1.5559 1.6191A.337.337 0 0 0 1.6016 24h20.7971a.4579.4579 0 0 0 .0437-.002c.8727-.0768 1.5568-.8271 1.5568-1.7085V1.7098c0-.8914-.696-1.6416-1.584-1.7078A.3294.3294 0 0 0 22.3781 0zm0 .496a1.2144 1.2144 0 0 1 1.1252 1.2139v20.5797c0 .6377-.4875 1.1602-1.1045 1.2145H1.6016c-.5967-.0543-1.0645-.5297-1.1053-1.1258V1.6284C.5371 1.0185 1.0184.5364 1.6217.496h20.7564zM4.7954 8.2603v7.3636H2.8899V8.2603h1.9055zm6.5367 0v7.3636H9.6707v-4.9704l-.6711 4.9704H7.813l-.6986-4.8618-.0066 4.8618h-1.668V8.2603h2.468c.0748.4476.1492.9694.2307 1.5734l.2712 1.8713.4407-3.4447h2.4817zm2.9772 1.3289c.0742.0404.122.108.1417.2034.0279.0953.0345.3118.0345.6442v2.8548c0 .4881-.0345.7867-.0955.8954-.0609.1152-.2304.1695-.5018.1695V9.5211c.204 0 .3457.0205.4211.0681zm-.0211 6.0347c.4543 0 .8006-.0265 1.0245-.0742.2304-.0477.4204-.1357.5694-.2648.1556-.1218.2642-.298.3251-.5219.0611-.2238.1021-.6648.1021-1.3224v-2.5832c0-.6986-.0271-1.1668-.0742-1.4039-.041-.237-.1431-.4543-.3126-.6437-.1695-.1973-.4198-.3324-.7456-.421-.3191-.0808-.8542-.1285-1.7694-.1285h-1.4244v7.3636h2.3051zm5.14-1.7827c0 .3523-.0199.5762-.0544.6708-.033.0947-.1894.1424-.3046.1424-.1086 0-.19-.0477-.2238-.1351-.041-.0887-.0609-.2986-.0609-.6238v-1.9469c0-.3324.0199-.5423.0543-.6237.0338-.0808.1086-.122.2171-.122.1153 0 .2709.0412.3114.1425.041.0947.0609.2986.0609.6032v1.8926zm-2.4747-5.5809v7.3636h1.7157l.1152-.4675c.1556.1894.3251.3324.5152.4271.1828.0881.4608.1357.678.1357.3047 0 .5629-.0748.7802-.237.2165-.1562.3589-.3462.4198-.5628.0543-.2173.0887-.543.0887-.9841v-2.0675c0-.4409-.0139-.7324-.0344-.8681-.0199-.1357-.0742-.2781-.1695-.4204-.1021-.1425-.2437-.251-.4272-.3325-.1834-.0742-.3999-.1152-.6576-.1152-.2172 0-.4952.0477-.6846.1285-.1835.0887-.353.2238-.5086.4007V8.2603h-1.8309z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/alexandermorano"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://discord.gg/62TJaZ3Z5r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
            </svg>
          </a>
        </div>

        {/* Biography Content */}
        <article className="space-y-6">
          <div className="bio-section">
            <p className="text-xl text-gray-300">
              With over 17 years of experience in the entertainment and technology sectors and over 25 in software development and deployment, I built my career as a Creative Technologist focused on bridging the gap between creative vision and technical execution. Throughout my career, I have developed deep expertise in both traditional animation pipelines and cutting-edge technologies, allowing me to lead teams effectively in the digital entertainment industry.
            </p>
          </div>

          <div className="bio-section">
            <p className="text-xl text-gray-300">
              My journey began in the early days of the internet, developing websites with a focus on database engineering. After building a successful business, my passion for visual storytelling led me to study VFX, which opened doors to producing indie film projects throughout the early 2000s.
            </p>
          </div>

          <div className="bio-section">
            <p className="text-xl text-gray-300">
              My first entry into the studio system came through Flight33, an outlet studio serving product to MTV and the Discovery channel. Here I built out and maintained their delivery network serving over 60 artists, editors and producers across Macintosh, PC and AVID systems.
            </p>
          </div>

          <div className="bio-section">
            <p className="text-xl text-gray-300">
              That experience led me to Nickelodeon Animation Studio, where I supervised building their first 3D pipeline and supporting over 600 artists while supervising the R&D team. This included integrating overseas partners and supporting development for over 25 shows. That helped in establishing a foundation that shaped my approach to combining artistic innovation with technical precision.
            </p>
          </div>


          <div className="bio-section">
            <p className="text-xl text-gray-300">
              My professional journey continued through prestigious organizations including Disney Television Animation, where I tackled challenges ranging from automating lipsync to coordinating the first use of Shotgrid into their existing production systems, while building new pipelines into Disney+ delivery. This work also included doing artistic delivery in animation and compositing.
            </p>
          </div>

          <div className="bio-section">
            <p className="text-xl text-gray-300">
              I then spent time doing work for various studios doing game projects or indie film work. I have spent time retooling UI/UX systems for animation production while also developing complex Unreal Engine plugins for interactive experiences. As a Technical Director, I have led teams in diverse projects - from creating RPG survival shooters to developing avatar rendering systems for music festivals - building a unique skill set that spans both creative and technical domains.
            </p>
          </div>

          <div className="bio-section">
            <p className="text-xl text-gray-300">
              Today, I continue to push the boundaries of creative technology through open-source contributions and project development. My work on <a href="https://github.com/Amorano/Jovimetrix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline">Jovimetrix</a>, which provides advanced compositing capabilities, GLSL shader support and MIDI integration for ComfyUI, reflects my commitment to advancing the digital creation space for all users.
            </p>
          </div>

          <div className="bio-section">
            <p className="text-xl text-gray-300">
              By combining my extensive knowledge of programming languages, 3D animation tools, and project management with my passion for innovation, I strive to develop solutions that enhance digital workflows and user experiences. I believe in creating technology that not only solves problems but also empowers creators to achieve their vision.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}