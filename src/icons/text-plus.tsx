"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 10h-14"}],["path",{"d":"M5 6h14"}],["path",{"d":"M14 14h-9"}],["path",{"d":"M5 18h6"}],["path",{"d":"M18 15v6"}],["path",{"d":"M15 18h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[4,5],"o":[18,18],"dl":0.2,"st":0.08},{"fx":"slide","n":[0,1,2,3],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const TextPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextPlusIcon.displayName = "TextPlusIcon";
