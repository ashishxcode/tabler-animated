"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M11.5 3a11.2 11.2 0 0 0 0 18"}],["path",{"d":"M12.5 3a11.2 11.2 0 0 1 0 18"}],["path",{"d":"M12 3l0 18"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"draw","n":[1,2,3],"o":[12,12],"dl":0.1,"st":0.1}];

export const WorldLongitudeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldLongitudeIcon.displayName = "WorldLongitudeIcon";
