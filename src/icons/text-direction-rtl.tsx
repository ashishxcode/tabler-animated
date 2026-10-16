"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5"}],["path",{"d":"M14 15v-11"}],["path",{"d":"M10 15v-11"}],["path",{"d":"M5 19h14"}],["path",{"d":"M7 21l-2 -2l2 -2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[12,12.5],"d":[2.4,0],"st":0.06}];

export const TextDirectionRtlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextDirectionRtlIcon.displayName = "TextDirectionRtlIcon";
