"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 14h-10a4 4 0 0 1 -4 -4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4a4 4 0 0 1 -4 4"}],["path",{"d":"M15 14h-6v4h6v-4"}],["path",{"d":"M17 18h-10"}],["path",{"d":"M12 10.02v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"a":0.25,"st":0.08,"os":[[12,16],[12,18]]},{"fx":"pop","n":[3],"o":[12,10.02],"a":0.35,"dl":0.12},{"fx":"tilt","n":[0],"o":[12,10],"a":-3}];

export const DeviceComputerCamera2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceComputerCamera2Icon.displayName = "DeviceComputerCamera2Icon";
