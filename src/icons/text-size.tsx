"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7v-2h13v2"}],["path",{"d":"M10 5v14"}],["path",{"d":"M12 19h-4"}],["path",{"d":"M15 13v-1h6v1"}],["path",{"d":"M18 12v7"}],["path",{"d":"M17 19h2"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const TextSizeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextSizeIcon.displayName = "TextSizeIcon";
