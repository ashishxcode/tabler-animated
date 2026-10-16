"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 18l.01 0"}],["path",{"d":"M9.172 15.172a4 4 0 0 1 5.656 0"}],["path",{"d":"M6.343 12.343a8 8 0 0 1 11.314 0"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1],"st":0.13,"os":[[12.01,18],[12,14.59]]}];

export const Wifi2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Wifi2Icon.displayName = "Wifi2Icon";
