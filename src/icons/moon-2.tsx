"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.418 4.157a8 8 0 0 0 0 15.686"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[1],"o":[12,12],"a":-14},{"fx":"pop","n":[0],"o":[13.21,12],"a":0.35,"dl":0.2}];

export const Moon2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Moon2Icon.displayName = "Moon2Icon";
