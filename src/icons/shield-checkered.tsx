"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"}],["path",{"d":"M12 3v18"}],["path",{"d":"M3.5 12h17"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.08},{"fx":"draw","n":[1,2],"o":[12,12],"dl":0.15}];

export const ShieldCheckeredIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShieldCheckeredIcon.displayName = "ShieldCheckeredIcon";
