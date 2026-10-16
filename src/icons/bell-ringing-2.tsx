"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1 -1.414 7.072l-2.122 2.12a4 4 0 0 0 -.707 3.536l-11.313 -11.312a4 4 0 0 0 3.535 -.707l2.121 -2.123a7 7 0 0 1 7.072 -1.414a2 2 0 0 1 2.828 0"}],["path",{"d":"M7.343 12.414l-.707 .707a3 3 0 0 0 4.243 4.243l.707 -.707"}]];
const rig: Rig[] = [{"fx":"swing","n":[0],"o":[11.88,5.05],"a":12},{"fx":"tilt","n":[1],"o":[8.67,13.41],"a":7,"dl":0.07}];

export const BellRinging2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BellRinging2Icon.displayName = "BellRinging2Icon";
