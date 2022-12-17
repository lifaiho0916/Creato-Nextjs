export default function Home() {
  return (
    <div className="px-2 py-2">
      <h1>Colors</h1>
      <h2>Neutral</h2>
      <div className="flex">
        <div className="w-[130px] h-[50px] bg-neutral-50">50</div>
        <div className="w-[130px] h-[50px] bg-neutral-100">100</div>
        <div className="w-[130px] h-[50px] bg-neutral-200">200</div>
        <div className="w-[130px] h-[50px] bg-neutral-300">300</div>
        <div className="w-[130px] h-[50px] bg-neutral-400">400</div>
        <div className="w-[130px] h-[50px] bg-neutral-500">500</div>
        <div className="w-[130px] h-[50px] bg-neutral-600">600</div>
        <div className="w-[130px] h-[50px] bg-neutral-700">700</div>
        <div className="w-[130px] h-[50px] bg-neutral-800">800</div>
        <div className="w-[130px] h-[50px] bg-neutral-900">900</div>
      </div>
      <h2>Primary</h2>
      <div className="flex">
        <div className="w-[130px] h-[50px] bg-primary-50">50</div>
        <div className="w-[130px] h-[50px] bg-primary-100">100</div>
        <div className="w-[130px] h-[50px] bg-primary-200">200</div>
        <div className="w-[130px] h-[50px] bg-primary-300">300</div>
        <div className="w-[130px] h-[50px] bg-primary-400">400</div>
        <div className="w-[130px] h-[50px] bg-primary-500">500</div>
        <div className="w-[130px] h-[50px] bg-primary-600">600</div>
        <div className="w-[130px] h-[50px] bg-primary-700">700</div>
        <div className="w-[130px] h-[50px] bg-primary-800">800</div>
        <div className="w-[130px] h-[50px] bg-primary-900">900</div>
      </div>
      <h2>Secondary</h2>
      <div className="flex">
        <div className="w-[130px] h-[50px] bg-secondary-50">50</div>
        <div className="w-[130px] h-[50px] bg-secondary-100">100</div>
        <div className="w-[130px] h-[50px] bg-secondary-200">200</div>
        <div className="w-[130px] h-[50px] bg-secondary-300">300</div>
        <div className="w-[130px] h-[50px] bg-secondary-400">400</div>
        <div className="w-[130px] h-[50px] bg-secondary-500">500</div>
        <div className="w-[130px] h-[50px] bg-secondary-600">600</div>
        <div className="w-[130px] h-[50px] bg-secondary-700">700</div>
        <div className="w-[130px] h-[50px] bg-secondary-800">800</div>
        <div className="w-[130px] h-[50px] bg-secondary-900">900</div>
      </div>
      <h2>Success</h2>
      <div className="flex">
        <div className="w-[130px] h-[50px] bg-success-50">50</div>
        <div className="w-[130px] h-[50px] bg-success-100">100</div>
        <div className="w-[130px] h-[50px] bg-success-200">200</div>
        <div className="w-[130px] h-[50px] bg-success-300">300</div>
        <div className="w-[130px] h-[50px] bg-success-400">400</div>
        <div className="w-[130px] h-[50px] bg-success-500">500</div>
        <div className="w-[130px] h-[50px] bg-success-600">600</div>
        <div className="w-[130px] h-[50px] bg-success-700">700</div>
        <div className="w-[130px] h-[50px] bg-success-800">800</div>
        <div className="w-[130px] h-[50px] bg-success-900">900</div>
      </div>
      <h2>Error</h2>
      <div className="flex">
        <div className="w-[130px] h-[50px] bg-error-50">50</div>
        <div className="w-[130px] h-[50px] bg-error-100">100</div>
        <div className="w-[130px] h-[50px] bg-error-200">200</div>
        <div className="w-[130px] h-[50px] bg-error-300">300</div>
        <div className="w-[130px] h-[50px] bg-error-400">400</div>
        <div className="w-[130px] h-[50px] bg-error-500">500</div>
        <div className="w-[130px] h-[50px] bg-error-600">600</div>
        <div className="w-[130px] h-[50px] bg-error-700">700</div>
        <div className="w-[130px] h-[50px] bg-error-800">800</div>
        <div className="w-[130px] h-[50px] bg-error-900">900</div>
      </div>
      <br />
      <h1>H1 heading</h1>
      <h2>H2 heading</h2>
      <h3>H3 heading</h3>
      <h4>H4 heading</h4>
      <h5>H5 heading</h5>
      <h6>H6 heading</h6>
      <br />
      <h1 className="font-light">Light</h1>
      <h1 className="font-normal">Normal</h1>
      <h1 className="font-semibold">SemiBold</h1>
      <h1 className="font-bold">Bold</h1>
      <h1 className="font-extrabold">Extra Bold</h1>
      {/* <h1>Buttons</h1>
      <h2>Primary</h2>
      <div className="flex">
        <Button
          color="primary"
          text="Primary Rounded Fill"
          rounded="rounded"
          handleClick={() => { console.log("Primary Rounded Fill") }}
        />
        <Button
          color="primary"
          text="Primary Pill Fill"
          rounded="pill"
          handleClick={() => { console.log("Primary Pill Fill") }}
        />
        <Button
          color="primary"
          text="Primary Rounded Outline"
          rounded="rounded"
          outlined
          handleClick={() => { console.log("Primary Rounded Outline") }}
        />
        <Button
          color="primary"
          text="Primary Pill Outline"
          rounded="pill"
          outlined
          handleClick={() => { console.log("Primary Rounded Fill") }}
        />
        <Button
          text="Disable Rouned Fill"
          rounded="rounded"
          disabled
          handleClick={() => { console.log("Primary Rounded Fill") }}
        />
        <Button
          text="Disable Pill Outline"
          rounded="pill"
          disabled
        />
      </div>
      <h2>Secondary</h2>
      <div className="flex">
        <Button
          color="secondary"
          text="Secondary Rounded Fill"
          rounded="rounded"
        />
        <Button
          color="secondary"
          text="Secondary Pill Fill"
          rounded="pill"
        />
        <Button
          color="secondary"
          text="Secondary Rounded Fill"
          rounded="rounded"
          outlined
        />
        <Button
          color="secondary"
          text="Secondary Pill Outline"
          rounded="pill"
          outlined
        />
        <Button
          color="secondary"
          rounded="pill"
          outlined
          icon="close"
        />
        <Button
          text="primary"
          color="secondary"
          rounded="pill"
          outlined
          icon="close"
        />
        <Button
          text="primary"
          width="300px"
          color="secondary"
          rounded="rounded"
          icon="close"
        />
      </div>
      <br />
      <h1>Container</h1>
      <h2>Primary</h2>
      <div className="flex">
        <Container
          color="primary"
          text="Primary Rounded Fill"
        />
        <Container
          color="primary"
          text="Primary Rounded Fill"
          icon="close"
        />
         <Container
          color="primary"
          text="Primary Rounded Fill"
          outlined
        />
        <Container
          color="primary"
          text="Primary Rounded Fill"
          outlined
          icon="close"
        />
        <Container
          disabled
          text="Primary Rounded Fill"
          icon="close"
        />
      </div>
      <h2>Secondary</h2>
      <div className="flex">
      <Container
          color="secondary"
          text="Primary Rounded Fill"
        />
        <Container
          color="secondary"
          text="Primary Rounded Fill"
          icon="close"
        />
         <Container
          color="secondary"
          text="Primary Rounded Fill"
          outlined
        />
        <Container
          color="secondary"
          text="Primary Rounded Fill"
          outlined
          icon="close"
        />
      </div> */}
    </div>
  );
}