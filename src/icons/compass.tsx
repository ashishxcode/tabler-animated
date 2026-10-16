"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 16l2 -6l6 -2l-2 6l-6 2"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M12 3l0 2"}],["path",{"d":"M12 19l0 2"}],["path",{"d":"M3 12l2 0"}],["path",{"d":"M19 12l2 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12],"a":25},{"fx":"tilt","n":[2,3,4,5],"o":[12,12],"a":25}];

export const CompassIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CompassIcon.displayName = "CompassIcon";
