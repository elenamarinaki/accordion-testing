import Accordion from "./components/Accordion";

const App = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div className="mt-[16rem]">
        <Accordion title="Fruits">
          <ul className="flex flex-col gap-2">
            <li>Strawberries 🍓</li>
            <li>Bananas 🍌</li>
            <li>Kiwis 🥝</li>
            <li>Blueberries 🫐</li>
            <li>Peaches 🍑</li>
          </ul>
        </Accordion>
      </div>

      <div>
        <Accordion title="Long paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor convallis odio, a vehicula turpis laoreet non. In hac
            habitasse platea dictumst. Pellentesque ultricies a eros et rhoncus.
            Nunc varius lacus ut felis ultricies blandit. Proin feugiat
            consectetur est, vitae dictum ipsum. Vestibulum blandit, orci id
            lobortis aliquam, quam lacus euismod ex, eget tristique ante diam
            vel dui. Phasellus in tempor erat. Aliquam erat volutpat. In nec
            tortor velit. Phasellus feugiat ante nec nulla tempor, eu aliquam
            est placerat. Pellentesque quis lacus consequat, tristique ex vel,
            dignissim nunc. Nulla ac est consectetur, mattis ante nec, viverra
            magna. Nulla sit amet mattis diam. Sed placerat imperdiet nisl eget
            ultricies. Nam ut enim id justo lacinia rhoncus scelerisque sit amet
            turpis. Quisque vel euismod elit. Donec dapibus elit ipsum, quis
            rutrum ligula vulputate non. Suspendisse a dignissim odio, in
            molestie tellus. Maecenas purus tellus, aliquam at velit vel,
            efficitur tristique metus. Donec porta in lectus non porttitor.
            Nulla et ultrices velit, quis hendrerit dui. Phasellus dui eros,
            ultrices a nisl quis, facilisis suscipit libero. Donec volutpat
            dapibus leo. Duis eu tempor urna, et sodales nisl. Curabitur semper
            vitae ante a ullamcorper. Etiam a aliquet est, vel ornare est.
          </p>
        </Accordion>
      </div>
    </div>
  );
};

export default App;
