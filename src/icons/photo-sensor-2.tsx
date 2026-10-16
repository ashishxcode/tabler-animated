"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-2"}],["path",{"d":"M7 19h-2a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"}],["path",{"d":"M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2],"o":[12,12],"a":-3}];

export const PhotoSensor2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoSensor2Icon.displayName = "PhotoSensor2Icon";
