"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M21 12h.01"}],["path",{"d":"M3 12h.01"}],["path",{"d":"M5 15h.01"}],["path",{"d":"M5 9h.01"}],["path",{"d":"M19 15h.01"}],["path",{"d":"M12 18h.01"}],["path",{"d":"M12 6h.01"}],["path",{"d":"M8 17h.01"}],["path",{"d":"M8 7h.01"}],["path",{"d":"M16 17h.01"}],["path",{"d":"M16 7h.01"}],["path",{"d":"M19 9h.01"}]];
const rig: Rig[] = [{"fx":"blink","n":[0,1,2,3,4,5,6,7,8,9,10,11,12],"o":[12.01,12]}];

export const EyeDottedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EyeDottedIcon.displayName = "EyeDottedIcon";
