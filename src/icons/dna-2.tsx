"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 3v1c-.01 3.352 -1.68 6.023 -5.008 8.014c-3.328 1.99 3.336 -2 .008 -.014c-3.328 1.99 -5 4.662 -5.008 8.014v1"}],["path",{"d":"M17 21.014v-1c-.01 -3.352 -1.68 -6.023 -5.008 -8.014c-3.328 -1.99 3.336 2 .008 .014c-3.328 -1.991 -5 -4.662 -5.008 -8.014v-1"}],["path",{"d":"M7 4h10"}],["path",{"d":"M7 20h10"}],["path",{"d":"M8 8h8"}],["path",{"d":"M8 16h8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12.01],"a":0.06},{"fx":"pop","n":[2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,4],[12,20],[12,8],[12,16]]}];

export const Dna2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Dna2Icon.displayName = "Dna2Icon";
