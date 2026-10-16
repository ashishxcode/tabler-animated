"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.03 7.97l4.97 -4.97l4 4l-5 5m-2 2l-7 7l-4 -4l7 -7"}],["path",{"d":"M16 7l-1.5 -1.5"}],["path",{"d":"M10 13l-1.5 -1.5"}],["path",{"d":"M7 16l-1.5 -1.5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"tilt","n":[0,1,2,3],"o":[12,21],"a":-16}];

export const Ruler2OffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Ruler2OffIcon.displayName = "Ruler2OffIcon";
