"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.343 7.343a8 8 0 1 1 11.314 11.314l-11.314 -11.314"}],["path",{"d":"M10.828 13.34l-4.242 4.243a2 2 0 1 0 2.828 2.828"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1],"o":[12.17,6],"a":-8}];

export const Umbrella2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Umbrella2Icon.displayName = "Umbrella2Icon";
