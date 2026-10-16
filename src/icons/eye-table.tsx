"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 18h-.011"}],["path",{"d":"M12 18h-.011"}],["path",{"d":"M16 18h-.011"}],["path",{"d":"M4 3h16"}],["path",{"d":"M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17"}],["path",{"d":"M14 7h-4"}],["path",{"d":"M9 15h1"}],["path",{"d":"M14 15h1"}],["path",{"d":"M12 11v-4"}]];
const rig: Rig[] = [{"fx":"blink","n":[0,1,2,3,4,5,6,7,8],"o":[12,12]}];

export const EyeTableIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EyeTableIcon.displayName = "EyeTableIcon";
