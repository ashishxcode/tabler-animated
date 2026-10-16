"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4h1m4 0h13"}],["path",{"d":"M4 4v10a2 2 0 0 0 2 2h10m3.42 -.592c.359 -.362 .58 -.859 .58 -1.408v-10"}],["path",{"d":"M12 16v4"}],["path",{"d":"M9 20h6"}],["path",{"d":"M8 12l2 -2m4 0l2 -2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"draw","n":[0,1,2,3,4],"o":[12,12],"st":0.08}];

export const PresentationOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PresentationOffIcon.displayName = "PresentationOffIcon";
