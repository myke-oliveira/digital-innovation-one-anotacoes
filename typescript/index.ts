// types
// interfaces

interface IAnimal {
  name: string;
  type: "terrestre" | "aquático";
  roar(intensity: number): void;
}

interface IFelino extends IAnimal {
  nightSight: boolean;
}

const animal: IAnimal = {
  name: "Elefante",
  type: "terrestre",
  roar: (intensity) => (console.log(`${intensity}dB`))
};

animal.roar(25)

const felino: IFelino = {
  name: "Leão",
  type: "terrestre",
  nightSight: true,
  roar: function (intensity: number): void {
    throw new Error("Function not implemented.");
  }
};