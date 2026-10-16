"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2"}],["path",{"d":"M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2"}],["path",{"d":"M7 8l0 .01"}],["path",{"d":"M7 16l0 .01"}],["path",{"d":"M11 8h6"}],["path",{"d":"M11 16h6"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,3,4,5],"st":0.12,"os":[[12,8],[12,16],[7,8],[7,16.01],[14,8],[14,16]]}];

export const Server2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Server2Icon.displayName = "Server2Icon";
