"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8.812 4.793l3.188 -1.793l8 4.5v8.5m-2.282 1.784l-5.718 3.216l-8 -4.5v-9l2.223 -1.25"}],["path",{"d":"M14.543 10.57l5.457 -3.07"}],["path",{"d":"M12 12v9"}],["path",{"d":"M12 12l-8 -4.5"}],["path",{"d":"M16 5.25l-4.35 2.447m-2.564 1.442l-1.086 .611"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"hop","n":[0,1,2,3,4],"o":[12,21],"d":[0,-1.5]}];

export const PackageOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PackageOffIcon.displayName = "PackageOffIcon";
