"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M15.51 15.56a5 5 0 1 0 -3.51 1.44"}],["path",{"d":"M18.832 17.86a9 9 0 1 0 -6.832 3.14"}],["path",{"d":"M12 12v9"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,3,1],"st":0.13,"os":[[12,12],[12,16.5],[12,12]]}];

export const Radar2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Radar2Icon.displayName = "Radar2Icon";
