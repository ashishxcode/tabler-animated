"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3"}],["path",{"d":"M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3"}],["path",{"d":"M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7"}],["path",{"d":"M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1"}],["path",{"d":"M17 12h.01"}],["path",{"d":"M13 12h.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[12,12],"st":0.07},{"fx":"pop","n":[0,1],"o":[9,12],"a":0.04}];

export const FormsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FormsIcon.displayName = "FormsIcon";
